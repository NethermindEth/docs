# Personal

### personal\_ecRecover\(message, signature\)

ecRecover returns the address associated with the private key that was used to calculate the signature in `personal_sign`

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_importRawKey\(keyData, passphrase\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_listAccounts\(\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_lockAccount\(address\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_newAccount\(passphrase\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_sendTransaction\(transaction, passphrase\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_sign\(message, address, passphrase\)

The sign method calculates an Ethereum specific signature with: 

```bash
sign(keccack256("Ethereum Signed Message:" + len(message) + message)))
```

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}

### personal\_unlockAccount\(address, passphrase\)

None

#### **Parameters**

None

#### **Returns**

None

#### **Example**

{% tabs %}
{% tab title="Request" %}
```bash

```
{% endtab %}

{% tab title="Response" %}
```

```
{% endtab %}
{% endtabs %}



