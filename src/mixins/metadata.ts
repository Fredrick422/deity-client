/*eslint-disable*/
function getMeta(vm : any) {
    // components can simply provide a `title` option
    // which can be either a string or a function
    const { meta } = vm.$options
    if (meta) {
        return typeof meta === 'function' ? meta.call(vm) : meta
    }
}

const server = {
    created() {
        const meta = getMeta(this)
        if (meta.title) {
            //this.$ssrContext.title = meta.title
        }
    }
}

const client = {
    mounted() {
        const meta = getMeta(this)

        if (meta.title) {
            document.title = meta.title
        }

        if (meta.tags) {
            meta.tags.map(tagDef => {
                const tag = document.createElement('meta');

                Object.keys(tagDef).forEach(key => {
                    tag.setAttribute(key, tagDef[key]);
                });

                // We use this to track which meta tags we create, so we don't interfere with other ones.
                tag.setAttribute('data-vue-router-controlled', '');

                return tag;
            })
            // Add the meta tags to the document head. 
            .forEach(tag => document.getElementsByTagName('head')[0].appendChild(tag));
        }
    }
}

// `VUE_ENV` can be injected with `webpack.DefinePlugin`
export default process.env.VUE_ENV === 'server' ? server : client