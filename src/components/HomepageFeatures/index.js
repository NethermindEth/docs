import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: '.NET Core Powered',
        subtitle: 'Robust & Scalable',
        Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
        description: (
            <>
                Unlock the full potential of the Ethereum blockchain with the Nethermind client,
                designed for speed, reliability, and ease of use.
            </>
        ),
    },
    {
        title: 'Lightning Fast',
        subtitle: 'High-Speed Synchronization',
        Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
        description: (
            <>
                Experience blazing fast synchronization times and minimal latency,
                ensuring your node stays in sync with the Ethereum network and your dApps run smoothly.
            </>
        ),
    },
    {
        title: 'User-Friendly',
        subtitle: 'Effortless Setup & Configuration',
        Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
        description: (
            <>
                Get started quickly with our intuitive interface and easy-to-follow documentation.
                Nethermind makes managing your Ethereum node simpler than ever.
            </>
        ),
    },
];

function Feature({Svg, title, description, subtitle}) {
    return (

        <div className={clsx('row')}>
            {/*<div className={clsx('col')}>*/}
            {/*    <div className="text--center">*/}
            {/*        <Svg className={styles.featureSvg} role="img"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={clsx('col')}>
                <div>
                    <h3>{title}</h3>
                    <h4>{subtitle}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
