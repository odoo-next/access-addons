/** @odoo-module **/

import {enterpriseService} from '@web_enterprise/webclient/home_menu';
import { session } from "@web/session";

export class blockMessage extends enterpriseService {
    setup() {
        console.log(odoo.session_info);
        old = super.setup();

        return old;

            // return {
            //     expirationDate: session.expiration_date,
            //     expirationReason: session.expiration_reason,
            //     // Hack: we need to know if there is at least an app installed (except from App and
            //     // Settings). We use mail to do that, as it is a dependency of almost every addon. To
            //     // determine whether mail is installed or not, we check for the presence of the key
            //     // "notification_type" in session_info, as it is added in mail for internal users.
            //     blockMessage: session.database_block_message,
            //     isMailInstalled: "notification_type" in session,
            //     warning: session.warning,
            // };
    };
};

// registry.category("services").add("enterprise", enterpriseService);

