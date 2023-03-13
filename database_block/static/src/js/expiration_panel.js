/** @odoo-module **/

import { ExpirationPanel } from "@web_enterprise/static/src/webclient/home_menu";

// Implementar un patch:
// https://www.odoo.com/documentation/15.0/es/developer/reference/frontend/patching_code.html#description

export class DatabaseBlock extends ExpirationPanel {
    constructor() {
        super(...arguments);
        this.enterprise = useService("enterprise");

        if (!this.enterprise.warning) {
            this.state = { display: false };
            return;
        }

        this.cookie = useService("cookie");
        this.rpc = useService("rpc");
        this.orm = useService("orm");

        let expirationDate;
        if (this.enterprise.expirationDate) {
            expirationDate = deserializeDateTime(this.enterprise.expirationDate);
        } else {
            // If no date found, assume 1 month and hope for the best
            expirationDate = DateTime.utc().plus({ days: 30 });
        }
        const diffDays = this._computeDiffDays(expirationDate);

        const hideCookie = this.cookie.current.oe_instance_hide_panel;

        let alertType = "info";
        if (diffDays <= 5) {
            alertType = "danger";
        } else if (diffDays <= 7) {
            alertType = "warning";
        }

        this.state = useState({
            display: (diffDays <= 10 && !hideCookie) || diffDays <= 0,
            alertType,
            buttonText: "Register",
            diffDays,
            message: "register",
            expirationDate,
        });

        this.inputRef = useRef("input");

        // Expiration reason e.g. 'trial','renewal','upsell',...
        this.expirationReason = this.enterprise.expirationReason;
        this.notYetRegistered = ["trial", "demo", false].includes(
            this.expirationReason
        );

        this.isMailInstalled = this.enterprise.isMailInstalled;

        // Type of logged-in accounts addressed by message
        this.warning = this.enterprise.warning;
    }
}
