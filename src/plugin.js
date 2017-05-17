let gravatar = require('gravatar');

module.exports = (config) => {

    class extension {
        construct() {

            if(this.parent.state().email) {

                this.parent.update({
                    gravatar: gravatar.url(this.parent.state().email)
                });

            }

        }
    }

    return {
        namespace: 'gravatar',
        extends: {
            User: extension,
            Me: extension,
        }
    }

}
