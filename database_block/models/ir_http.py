from odoo import SUPERUSER_ID, models


class IrHttp(models.AbstractModel):
    _inherit = "ir.http"

    def session_info(self):
        res = super(IrHttp, self).session_info()

        res['database_block_message'] = ""
        res['database_block_display'] = False
        res['database_block_alert_type'] = "info"  # info | warning | danger | success
        res['database_block_block_ui'] = False

        return res
