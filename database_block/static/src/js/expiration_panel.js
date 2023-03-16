/** @odoo-module **/

import { ExpirationPanel } from "@web_enterprise/webclient/home_menu/expiration_panel";
import { patch } from "@web/core/utils/patch";

// const { hooks } = owl;
const { useState } = owl.hooks;

patch(ExpirationPanel.prototype, "setup mounted", {
    mounted() {
        // super(...arguments);
        this._super(...arguments);
        this.state = useState({
            ...this.state,
            database_block_message: this.enterprise.database_block_message,
            database_block_display: this.enterprise.database_block_display,
            database_block_alert_type: this.enterprise.database_block_alert_type,
        });

        // this.state = useState({
        //     ...this.state,
        //     this.database_block_message = this.enterprise.database_block_message,
        //     this.database_block_display = this.enterprise.database_block_display,
        //     this-database_block_alert_type = this.enterprise.database_block_alert_type,

        // });
        // console.log(this.state);

        console.log("expiration panel js .................", this.state);

    },
});
