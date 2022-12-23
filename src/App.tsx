import React from 'react'
import { useImmer } from 'use-immer'
import { toast } from 'react-hot-toast'
import { ContentComponent, DataViewer } from './components'
import { TransferSuiTransaction, SignableTransaction } from '@mysten/sui.js'
import './App.css'

export interface Account {
    index: number
    name: string
    address: string
    derivationPath: string
    publicKey?: string
    display: boolean
}

function App() {
    const [state, setState] = useImmer({
        installed: false,
        walletInfo: null,
        balance: null,
        balances: null,
        signature: null,
        loading: false,
        account: null,
        accounts: null,
        network: null,
        networks: null,
        assets: null,
        transferCoin: null,
        registerCoin: null,
        SUISignAndExecuteTransaction: null,
    })

    React.useEffect(() => {
        setState((draft) => {
            draft.installed = window.omega && window.omega.isOmega
        })
    }, [])

    React.useEffect(() => {
        console.log(12312)
        onConnectWallet()
    }, [])

    const onConnectWallet = React.useCallback(() => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .connect()
                .then((result: any) => {
                    setState((draft) => {
                        draft.walletInfo = result
                        draft.loading = false
                    })
                    toast.success('Connected successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.walletInfo = err
                        draft.loading = false
                    })
                    toast.error('Failed to connect Omega Wallet')
                })
    }, [])

    const onSignMessage = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .sign('Hello world')
                .then((result: any) => {
                    setState((draft) => {
                        draft.signature = result
                        draft.loading = false
                    })
                    toast.success('Signed successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.signature = err
                        draft.loading = false
                    })
                    toast.error('Failed to sign a message')
                })
    }

    const onGetAccount = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getAccount()
                .then((result: any) => {
                    setState((draft) => {
                        draft.account = result
                        draft.loading = false
                    })
                    toast.success('Got account successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.account = err
                        draft.loading = false
                    })
                    toast.error('Failed to get a account')
                })
    }

    const onGetAccounts = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getAccounts()
                .then((result: any) => {
                    setState((draft) => {
                        draft.accounts = result
                        draft.loading = false
                    })
                    toast.success('Got accounts successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.accounts = err
                        draft.loading = false
                    })
                    toast.error('Failed to get accounts')
                })
    }

    const onGetNetwork = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getNetwork()
                .then((result: any) => {
                    setState((draft) => {
                        draft.network = result
                        draft.loading = false
                    })
                    toast.success('Got network successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.network = err
                        draft.loading = false
                    })
                    toast.error('Failed to get a network')
                })
    }

    const onGetNetworks = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getNetworks()
                .then((result: any) => {
                    setState((draft) => {
                        draft.networks = result
                        draft.loading = false
                    })
                    toast.success('Got networks successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.networks = err
                        draft.loading = false
                    })
                    toast.error('Failed to get networks')
                })
    }

    const onGetAssets = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getNetworks()
                .then((result: any) => {
                    setState((draft) => {
                        draft.assets = result
                        draft.loading = false
                    })
                    toast.success('Got assets successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.assets = err
                        draft.loading = false
                    })
                    toast.error('Failed to get assets')
                })
    }

    const onGetBalance = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getBalance()
                .then((result: any) => {
                    setState((draft) => {
                        draft.balance = result
                        draft.loading = false
                    })
                    toast.success('Got balance successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.balance = err
                        draft.loading = false
                    })
                    toast.error('Failed to get balance')
                })
    }

    const onGetBalances = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .getBalances()
                .then((result: any) => {
                    setState((draft) => {
                        draft.balances = result
                        draft.loading = false
                    })
                    toast.success('Got balances successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.balances = err
                        draft.loading = false
                    })
                    console.log(err)
                    toast.error('Failed to get balances')
                })
    }

    const onTransferCoin = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .signTransaction({
                    kind: 'transfer_coin',
                    data: {
                        amount: '1',
                        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
                        to: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
                    },
                })
                .then((result: any) => {
                    setState((draft) => {
                        draft.transferCoin = result
                        draft.loading = false
                    })
                    toast.success('Transferred successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.transferCoin = err
                        draft.loading = false
                    })
                    toast.error('Failed to transfer coin')
                })
    }

    const onRegisterCoin = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega
                .signTransaction({
                    kind: 'register_asset',
                    data: {
                        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
                    },
                })
                .then((result: any) => {
                    setState((draft) => {
                        draft.transferCoin = result
                        draft.loading = false
                    })
                    toast.success('Transferred successfully')
                })
                .catch((err: any) => {
                    setState((draft) => {
                        draft.transferCoin = err
                        draft.loading = false
                    })
                    toast.error('Failed to transfer coin')
                })
    }

    const onSUISignAndExecuteTransaction = async () => {
        if (state.walletInfo && (state.walletInfo as Account).address) {
            const data: TransferSuiTransaction = {
                amount: 1,
                gasBudget: 100,
                recipient: '0x1058a41ebe92ff069b65b692e20e51874a431e8b',
                suiObjectId: '0x4369b5214366d080ff50c0f721a657c3af585807',
            }
            window.omega &&
                window.omega
                    .signTransaction({
                        kind: 'sui_transferSui',
                        data: data,
                    })
                    .then((result: any) => {
                        setState((draft) => {
                            draft.SUISignAndExecuteTransaction = result
                            draft.loading = false
                        })
                        toast.success('Executed transaction successfully')
                    })
                    .catch((err: any) => {
                        setState((draft) => {
                            draft.SUISignAndExecuteTransaction = err
                            draft.loading = false
                        })
                        toast.error('Failed to execute transaction')
                    })
        }
    }

    return (
        <main>
            <div className="body">
                <div className="app-container" style={{ padding: '20px 0' }}>
                    <div className="container">
                        <div className="text-center">
                            <h1 className="mb-0">
                                <svg width="64" height="64" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="120" height="120" rx="16" fill="black" />
                                    <path
                                        d="M54.9593 25.5161C42.2106 27.0182 30.1166 35.6072 24.2622 47.2775C21.0269 53.7867 19.6788 60.1418 20.064 67.5368C20.2566 71.581 21.335 77.2043 22.2209 78.976C22.4134 79.3227 23.2993 81.1329 24.1467 83.0202C25.0325 84.8689 26.7657 87.7191 28.0368 89.3753C30.1936 92.264 33.8526 96 34.4689 96C34.7385 96 52.7254 81.0559 54.189 79.6308C54.6127 79.2071 54.4971 79.0145 53.3417 78.4753C52.6099 78.1287 51.3003 77.2428 50.453 76.511L48.8738 75.2015L46.6399 77.0117C45.4074 77.9746 44.3289 78.899 44.2134 79.053C43.212 80.2855 34.8926 86.7562 34.5459 86.5636C33.6216 85.9474 30.3092 80.3626 29.1922 77.3969C27.2279 72.3898 26.7657 69.5396 26.9968 64.0319C27.2279 58.5241 28.0368 55.1347 30.1936 50.8209C34.623 42.0393 41.4788 36.262 51.0307 33.3348C54.0349 32.4489 55.0364 32.3334 60.0049 32.3334C64.9734 32.3334 65.9748 32.4489 68.9791 33.3348C78.531 36.262 85.3868 42.0393 89.8161 50.8209C92.3197 55.828 92.9359 58.7937 92.8974 65.5725C92.8974 71.0418 92.8204 71.8121 91.819 74.8163C91.2027 76.6265 90.2783 78.9375 89.7391 80.0159C88.6607 82.2113 86.0031 86.217 85.4253 86.5636C85.1172 86.7562 77.0674 80.4781 75.7964 79.0916C75.6808 78.9375 74.6024 78.0131 73.3699 76.9732L71.136 75.0859L69.7109 76.4725C68.9406 77.2043 67.631 78.1287 66.8222 78.5523L65.3201 79.2841L74.8335 87.2569C80.0331 91.6477 84.6165 95.4608 85.0402 95.6919C85.6949 96.1155 86.0416 95.9615 87.7748 94.2668C90.779 91.3011 94.0914 86.7177 95.8631 83.0202C96.7105 81.1329 97.5963 79.3227 97.7889 78.9375C98.6748 77.2813 99.7147 71.5425 99.9458 67.4598C101.217 42.4245 79.9561 22.6274 54.9593 25.5161Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M54.6908 34.7598C43.3287 36.8397 33.9308 45.1976 30.3488 56.5213C29.1548 60.3343 28.8467 67.8449 29.7326 71.8891C30.1177 73.4682 30.5799 74.8933 30.811 75.0474C31.0036 75.1629 31.7354 74.7778 32.3902 74.1615C33.0835 73.5067 34.2389 72.5438 35.0092 71.9661L36.3958 70.9647L36.2032 66.4198C35.9336 58.7167 37.8209 53.8252 43.2516 48.4329C46.7951 44.8895 49.6453 43.1948 54.0746 42.0778C59.6979 40.6142 66.13 41.3846 71.2911 44.0807C74.642 45.8139 79.495 50.7439 81.2667 54.2103C83.6162 58.7937 84.4636 63.4541 83.8088 68.6538L83.5392 70.7721L86.1968 73.006C87.6604 74.2385 89.0469 75.1629 89.2395 75.0474C89.4321 74.8933 89.8943 73.4682 90.2794 71.8891C91.1653 67.8449 90.8572 60.3343 89.6632 56.5213C86.4279 46.2375 78.5321 38.4959 68.2869 35.4916C65.1671 34.6058 57.8876 34.2206 54.6908 34.7598Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M54.6122 44.2347C47.1787 46.199 40.8236 52.4771 39.0518 59.6411C38.243 62.8379 38.0889 66.4584 38.6282 69.116L39.1289 71.3884L36.972 73.1986C35.778 74.2 34.1218 75.6636 33.2745 76.434L31.6953 77.859L32.7738 79.9004C33.3515 81.0173 34.1603 82.3654 34.507 82.8276L35.2388 83.752L38.2815 81.1714C46.9861 73.8919 47.3327 73.5453 47.0631 72.929C45.5225 69.2315 45.2914 68.2686 45.2529 65.3799C45.2529 60.0647 47.6023 55.6739 51.9546 52.8623C54.8048 51.0135 57.3083 50.3973 61.1599 50.6284C67.9387 51.0135 73.3309 55.905 74.6404 62.8379C75.1026 65.3799 74.6019 69.3085 73.5235 71.3884C73.0613 72.2357 72.7147 73.0446 72.7147 73.2371C72.7147 73.5453 74.2168 74.8548 81.7274 81.1714L84.7701 83.752L85.5019 82.8276C85.8485 82.3654 86.6574 81.0173 87.2351 79.9004L88.3136 77.859L85.81 75.5866C84.4235 74.3156 82.7288 72.8905 82.0355 72.4283C81.2266 71.8506 80.88 71.3499 81.0341 70.9647C81.1496 70.6566 81.4577 69.1545 81.6503 67.6909C81.9584 65.5725 81.9199 64.3015 81.4192 61.7209C79.8016 53.0549 73.6005 46.3531 65.2041 44.1962C62.3539 43.4644 57.4239 43.5029 54.6122 44.2347Z"
                                        fill="white"
                                    />
                                </svg>
                            </h1>
                            <h2>Omega Wallet</h2>
                            <p>
                                A secure blockchain wallet that supports: APTOS, SUI, EVM-based blockchains, DApp, DeFi, and acts as your
                                portal to the Web3 world.
                            </p>
                            <ul className="text-left reset-ul">
                                <li>
                                    <label>⇲ Github: </label>
                                    <a href="https://github.com/nixjs/e2e-omega-wallet-test-dapp" target={'_blank'} rel="noreferrer">
                                        https://github.com/nixjs/e2e-omega-wallet-test-dapp
                                    </a>
                                </li>
                                <li>
                                    <label>⇲ Document: </label>
                                    <a href="https://omega-wallet.app/" target={'_blank'} rel="noreferrer">
                                        https://omega-wallet.app/
                                    </a>
                                </li>
                                <li>
                                    <label>⇲ Chrome Store Extension: </label>
                                    <a
                                        href="https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak"
                                        target={'_blank'}
                                        rel="noreferrer"
                                    >
                                        https://chrome.google.com/webstore/detail/omega-wallet-aptos-sui-ev/mobgoaaconpcicgajnpclkelkmjigiak
                                    </a>
                                </li>
                                <li>
                                    <label>⇲ Discussions and issues: </label>
                                    <a href="https://github.com/nixjs/omega-wallet-contribution" target={'_blank'} rel="noreferrer">
                                        https://github.com/nixjs/omega-wallet-contribution
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <br />
                        <ContentComponent title="App installed">
                            <DataViewer data={state.installed ? 'Installed' : 'Not yet'} />
                        </ContentComponent>
                        <div className="row">
                            <div className="column column-50">
                                <ContentComponent title="Connect wallet">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.connect()" />
                                    <button disabled={state.loading || !state.installed} onClick={onConnectWallet}>
                                        Connect wallet
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.walletInfo} />
                                </ContentComponent>
                            </div>
                            <div className="column column-50">
                                <ContentComponent title="Sign Message">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getAccount('Hello world')" />
                                    <button disabled={state.loading || !state.installed} onClick={onSignMessage}>
                                        Sign Message
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.signature} />
                                </ContentComponent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-50">
                                <ContentComponent title="Get account">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getAccount()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetAccount}>
                                        Get account
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.account} />
                                </ContentComponent>
                                <ContentComponent title="Get network">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getNetwork()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetNetwork}>
                                        Get network
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.network} />
                                </ContentComponent>
                            </div>
                            <div className="column column-50">
                                <ContentComponent title="Get accounts">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getAccounts()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetAccounts}>
                                        Get accounts
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.accounts} />
                                </ContentComponent>
                                <ContentComponent title="Get networks">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getNetworks()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetNetworks}>
                                        Get networks
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.networks} />
                                </ContentComponent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-50">
                                <ContentComponent title="Get assets">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getAsset()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetAssets}>
                                        Get assets
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.assets} />
                                </ContentComponent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-50">
                                <ContentComponent title="Get balance">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getBalance()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetBalance}>
                                        Get balance
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.balance} />
                                </ContentComponent>
                            </div>
                            <div className="column column-50">
                                <ContentComponent title="Get balance">
                                    <h5>Request:</h5>
                                    <DataViewer data="window.omega.getBalances()" />
                                    <button disabled={state.loading || !state.installed} onClick={onGetBalances}>
                                        Get balances
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.balances} />
                                </ContentComponent>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column column-100">
                                <ContentComponent title="Send a Transaction">
                                    <h5>Transfer coin request:</h5>
                                    <DataViewer
                                        data="await window.omega.signTransaction({
    kind: 'transfer_coin',
    data: {
        amount: '1',
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>',
        to: '0x8e11ce8e16b3d9701f08df9171a790ebdbca0a78010245427052b012faecc8a7',
    },
})"
                                    />
                                    <button disabled={state.loading || !state.installed} onClick={onTransferCoin}>
                                        Transfer coin
                                    </button>
                                    <div className="divided-bottom mt-16 mb-16" />
                                    <h5>Transfer coin response: </h5>
                                    <DataViewer data={state.transferCoin} />
                                    <h5>Register coin request:</h5>
                                    <DataViewer
                                        data="await window.omega.signTransaction({
    kind: 'register_asset',
    data: {
        assetId: '0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>'
    },
})"
                                    />
                                    <button disabled={state.loading || !state.installed} onClick={onRegisterCoin}>
                                        Register coin
                                    </button>
                                    <h5>Register coin response: </h5>
                                    <DataViewer data={state.registerCoin} />
                                    <h5>Request:</h5>
                                    <DataViewer
                                        data="const data: TransferSuiTransaction = {
                amount: 1,
                gasBudget: 100,
                recipient: '0x1058a41ebe92ff069b65b692e20e51874a431e8b',
                suiObjectId: '0x42ff19f3bd12855ef2809645ffbfa4b5e75d4de8',
            }
            const request: SignableTransaction = {
                kind: 'sui_transferSui',
                data
            }
             window.omega &&
                 window.omega._sui_
                     .signAndExecuteTransaction(request).then(console.log).catch(console.log)"
                                    />
                                    <button disabled={state.loading || !state.installed} onClick={onSUISignAndExecuteTransaction}>
                                        [SUI] Sign and execute a transaction
                                    </button>
                                    <h5>Response: </h5>
                                    <DataViewer data={state.SUISignAndExecuteTransaction} />
                                </ContentComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
