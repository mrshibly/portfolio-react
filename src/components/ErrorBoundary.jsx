import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application Runtime Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-red-400 mb-3 font-mono">Kernel Exception Detected</h2>
            <p className="text-sm text-gray-300 mb-6">
              A runtime component exception occurred. You can reload to restore the session.
            </p>
            <p className="text-xs text-gray-500 font-mono mb-6 bg-black/50 p-3 rounded-lg overflow-x-auto text-left">
              {this.state.error?.message || 'Unknown error'}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-xs font-mono font-semibold transition-colors"
            >
              Restart System
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
