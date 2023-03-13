/** @odoo-module **/

import { ExpirationPanel } from "@web_enterprise/static/src/webclient/home_menu";

export class DiffDays extends ExpirationPanel {
  setup() {
    console.log(odoo.session_info);
    super.setup();
  };
};
