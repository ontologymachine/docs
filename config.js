module.exports = {
    siteTitle: 'Ocean Protocol Documentation',
    siteShortTitle: 'Docs',
    siteDescription:
        'Learn about the components of the Ocean Protocol software stack, and how to run or use the components relevant to you.',
    siteUrl: process.env.SITE_URL || 'https://docs.oceanprotocol.com',
    siteIcon: 'node_modules/@oceanprotocol/art/logo/favicon-black.png',
    siteCompany: 'Ocean Protocol Foundation Ltd.',
    analyticsId: 'UA-60614729-11',
    social: {
        Site: 'https://oceanprotocol.com',
        Blog: 'https://blog.oceanprotocol.com',
        GitHub: 'https://github.com/oceanprotocol',
        Twitter: 'https://twitter.com/oceanprotocol',
        Gitter: 'https://gitter.im/oceanprotocol/Lobby',
        Telegram: 'https://t.me/OceanProtocol_Community'
    },
    githubContentPath:
        'https://github.com/oceanprotocol/docs/blob/master/content',
    githubDevOceanPath:
        'https://github.com/oceanprotocol/dev-ocean/blob/master/doc',
    redirects: [
        {
            from: '/concepts/',
            to: '/concepts/introduction/'
        },
        {
            from: '/setup/',
            to: '/setup/quickstart/'
        },
        {
            from: '/tutorials/',
            to: '/tutorials/introduction/'
        },
        {
            from: '/references/',
            to: '/references/introduction/'
        },
        {
            from: '/tutorials/wallets/',
            to: '/concepts/wallets/'
        },
        {
            from: '/concepts/production-network/',
            to: '/concepts/pacific-network/'
        },
        {
            from: '/references/squid-py/',
            to: 'https://squid-py.readthedocs.io/en/latest/'
        },
        {
            from: '/references/squid-java/',
            to: 'https://www.javadoc.io/doc/com.oceanprotocol/squid/'
        }
    ]
}
