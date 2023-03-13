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
            blockMessage: session.database_block_message,
            isMailInstalled: "notification_type" in session,
            warning: session.warning,
        };
    },
};

registry.category("services").add("enterprise", enterpriseService, {force: true});

// registry.category("services").add("enterprise", enterpriseService, {force: True});

