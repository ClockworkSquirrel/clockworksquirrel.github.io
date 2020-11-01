import { createRef } from "react"
import { store } from "@risingstack/react-easy-state"

function attempt(func, onError) {
    return (...args) => {
        try {
            func(...args)
        } catch (err) {
            onError(err)
        }
    }
}

const globalStore = store({
    refs: {
        socialLinksNode: createRef(),
    },

    methods: {
        scrollToSocialLinks: attempt(() => {
            globalStore.refs?.socialLinksNode?.current?.scrollIntoView({
                behavior: "smooth",
            })
        })
    },
})

export default globalStore