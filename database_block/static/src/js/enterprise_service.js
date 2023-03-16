/** @odoo-module **/

import { session } from "@web/session";
import { registry } from "@web/core/registry";

export const enterpriseService = {
    name: "enterprise",
    dependencies: [],
    start() {
        console.log('session: ');
        console.log(session);
        return {
            expirationDate: session.expiration_date,
            expirationReason: session.expiration_reason,
            // Hack: we need to know if there is at least an app installed (except from App and
            // Settings). We use mail to do that, as it is a dependency of almost every addon. To
            // determine whether mail is installed or not, we check for the presence of the key
            // "notification_type" in session_info, as it is added in mail for internal users.
            database_block_message: session.database_block_message,
            database_block_display: session.database_block_display,
            database_block_alert_type: session.database_block_alert_type,
            database_block_block_ui: session.database_block_block_ui,

            isMailInstalled: "notification_type" in session,
            warning: session.warning,
        };
    },
};

registry.category("services").add("enterprise", enterpriseService, {force: true});

// registry.category("services").add("enterprise", enterpriseService, {force: True});

