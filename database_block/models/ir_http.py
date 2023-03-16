# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

from odoo import SUPERUSER_ID, models
# from odoo.http import request
# from datetime import datetime

import logging
_logger = logging.getLogger(__name__)


class IrHttp(models.AbstractModel):

    _inherit = "ir.http"

    def session_info(self):
        res = super(IrHttp, self).session_info()
        # ICP = request.env['ir.config_parameter'].sudo()
        # User = request.env['res.users']

        #verificas que la fecha este o no expirada

        res['database_block_message'] = "Vieja tu base de datos ya esta vencida, comunicate con fulano!!!!"
        res['database_block_display'] = True
        res['database_block_alert_type'] = "danger"  # info | warning | danger | success
        res['database_block_block_ui'] = True

        return res
