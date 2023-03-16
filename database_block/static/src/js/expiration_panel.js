/** @odoo-module **/

import { ExpirationPanel } from "@web_enterprise/webclient/home_menu/expiration_panel";
import { patch } from "@web/core/utils/patch";

import { blockUI, unblockUI } from "web.framework";

patch(ExpirationPanel.prototype, "setup mounted", {
    mounted() {
        // super(...arguments);
        this._super(...arguments);

        this.state.database_block_message = this.enterprise.database_block_message;
        this.state.database_block_display = this.enterprise.database_block_display;
        this.state.database_block_alert_type = this.enterprise.database_block_alert_type;
        if (this.enterprise.database_block_block_ui) {
            blockUI();
        }
    },
});
