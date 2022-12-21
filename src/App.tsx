import React from 'react'
import { useImmer } from 'use-immer'
import { toast } from 'react-hot-toast'
import { ContentComponent, DataViewer } from './components'
import './App.css'

function App() {
    const [state, setState] = useImmer({
        installed: false,
        walletInfo: null,
        balance: null,
        signature: null,
        loading: false,
        account: null,
        accounts: null,
        network: null,
        networks: null,
        assets: null,
    })

    React.useEffect(() => {
        setState((draft) => {
            draft.installed = window.omega && window.omega.instance.isOmega
        })
    }, [])

    const onConnectWallet = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to connect Omega Wallet')
                })
    }

    const onSignMessage = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to sign a message')
                })
    }

    const onGetAccount = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get a account')
                })
    }

    const onGetAccounts = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get accounts')
                })
    }

    const onGetNetwork = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get a network')
                })
    }

    const onGetNetworks = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get networks')
                })
    }

    const onGetAssets = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get assets')
                })
    }

    const onGetBalance = () => {
        setState((draft) => {
            draft.loading = true
        })
        window.omega &&
            window.omega.instance
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
                    toast.success('Failed to get balance')
                })
    }

    return (
        <main>
            <div className="body">
                <div className="app-container" style={{ padding: '20px 0' }}>
                    <div className="container">
                        <div className="text-center">
                            <h1>Omega Wallet</h1>
                            <p>
                                A secure blockchain wallet that supports: APTOS, SUI, EVM-based blockchains, DApp, DeFi, and acts as your
                                portal to the Web3 world.
                            </p>
                        </div>
                        <ContentComponent title="App installed">
                            <DataViewer data={state.installed} />
                        </ContentComponent>
                        <ContentComponent title="Connect wallet">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.connect()" />
                            <button disabled={state.loading || !state.installed} onClick={onConnectWallet}>
                                Connect wallet
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.walletInfo} />
                        </ContentComponent>
                        <ContentComponent title="Sign Message">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getAccount('Hello world')" />
                            <button disabled={state.loading || !state.installed} onClick={onSignMessage}>
                                Sign Message
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.signature} />
                        </ContentComponent>
                        <ContentComponent title="Get account">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getAccount()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetAccount}>
                                Get account
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.account} />
                        </ContentComponent>
                        <ContentComponent title="Get account">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getAccounts()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetAccounts}>
                                Get accounts
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.accounts} />
                        </ContentComponent>
                        <ContentComponent title="Get network">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getNetwork()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetNetwork}>
                                Get network
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.network} />
                        </ContentComponent>
                        <ContentComponent title="Get networks">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getNetworks()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetNetworks}>
                                Get networks
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.networks} />
                        </ContentComponent>
                        <h4>Request:</h4>
                        <ContentComponent title="Get assets">
                            <DataViewer data="window.omega.instance.getAsset()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetAssets}>
                                Get assets
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.assets} />
                        </ContentComponent>
                        <ContentComponent title="Get balance">
                            <h4>Request:</h4>
                            <DataViewer data="window.omega.instance.getBalance()" />
                            <button disabled={state.loading || !state.installed} onClick={onGetBalance}>
                                Get balance
                            </button>
                            <h4>Response: </h4>
                            <DataViewer data={state.balance} />
                        </ContentComponent>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default App
