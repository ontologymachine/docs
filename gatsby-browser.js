// import global branding styles
import './src/styles/global.scss'

// IntersectionObserver polyfill for gatsby-image (Safari, IE)
if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
}

// Display a message when a service worker updates
// https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
        'This application has been updated. ' +
            'Reload to display the latest version?'
    )
    if (answer === true) {
        window.location.reload()
    }
}
