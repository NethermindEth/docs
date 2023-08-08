---
description: >-
  Pipelines were added to the Nethermind code base in order to make building
  plugins around blockchain analysis faster and easier.
---

# Pipeline

### Please note that the pipeline source code is still a work in progress and there will be significant changes in the coming weeks!

Nethermind under `Nethermind.Pipeline` project provides couple of interfaces and classes used in creating pipelines.

## Pipeline items

* `IPipelineElement` - base building block of the pipeline.
* `IPipelineElement<TOut>` - generic interface used for emitting data of type `TOut`. to the next element \(most of the
  time this is the first element in the collection\).
* IPipelineElement&lt;TIn, TOut&gt; - interface used for both emitting and subscribing to the data from the previous
  block, so `TIn` is the type of data from the previous block and `TOut` is the type of data that the element wants to
  give to the next element.
* `IPipeline` - collection of `IPipelineElement` used to store our pipeline in the memory.
* `IPipelineBuilder<TSource, TOutput>` - when we want to create our pipeline the fastest way will be to use
  implementation of this interface \(implemented in `PipelineBuilder.cs`\). Builder collects all of the elements we want
  to create the pipeline with and creates the flow of the data between them. Keep in mind that once the pipeline is
  created it's immutable.

## Publishers

Publishers are just classes implementing `IPipelineElement<TIn, TOut>` \(so they are able to subscribe and emit data\)
with the additional functionality of publishing the data to either WebSockets or as logs to the file. We add them to the
pipeline the same way as normal elements - by using `PipelineBuilder`

* WebSocketsPublisher
* LogPublisher

## Building pipeline

We will build a Nethermind plugin
\(see [nethermind plugins](../05-for-developers/plugins.md)) which observes newly created
blocks and see whether there are any transactions to a specific contract address.

Firstly we need to create our pipeline elements. With this case there will only be 3 of them - source, processor and
publisher but there is nothing standing in the way in adding more elements.

```csharp
    public class NewTransactionsSource<TIn> : IPipelineElement<TIn> where TIn : Transaction
    {
        private Block _block;
        private IBlockProcessor _blockProcessor;

        public Action<TIn> Emit { private get; set; }

        public NewTransactionsSource(IBlockProcessor blockProcessor)
        {
            _blockProcessor = blockProcessor; 

            
        }

        public void OnNewBlockProcessed(BlockProcessedEventArgs args)
        {
            var block = args.Block;

            foreach(var tx in block.Transactions)
            {
                Emit((TIn)tx);
            }
        }
    }
```

```csharp
    public class TransactionProcessorElement<TIn, TOut> : IPipelineElement<TIn, TOut>
    where TIn : Transaction
    where TOut : TIn
    {
        private Address _address = new Address("0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF");
        public Action<TOut> Emit { private get; set; }

        public void SubscribeToData(TIn data)
        {
            if(data.To == _address)
            {
                Emit((TOut)data);
            }
        }
    }
```

After that create plugin file and build your pipeline with `IPipelineBuilder`

```csharp
    public class PipelineExamplePlugin : INethermindPlugin
    {
        public string Name => "Pipeline example";
        public string Description => "Example on how to deal with Nethermind's pipeline";
        public string Author => "Nethermind team";

        private INethermindApi _api;
        private IPipeline _pipeline;

        public ValueTask DisposeAsync()
        {
            return ValueTask.CompletedTask;
        }

        public Task Init(INethermindApi nethermindApi)
        {
            _api = nethermindApi;
            
            var sourceElement = new NewTransactionsSource<Transaction>(_api.MainBlockProcessor);
            var processorElement = new TransactionProcessorElement<Transaction, Transaction>();
            var webSocketsPublisher = new WebSocketsPublisher<Transaction, Transaction>("example-publisher", _api.EthereumJsonSerializer);
            _api.WebSocketsManager.AddModule(webSocketsPublisher);

            var pipelineBuilder = new PipelineBuilder<Transaction, Transaction>(sourceElement);
            _pipeline = pipelineBuilder.AddElement(processorElement).AddElement(webSocketsPublisher).Build();

            return Task.CompletedTask;
        }

        public Task InitNetworkProtocol()
        {
            return Task.CompletedTask;
        }

        public Task InitRpcModules()
        {
            return Task.CompletedTask;
        }
    }
```

With that, all you need is to add the plugin to your node and watch how transactions are being streamed through web
sockets. 

