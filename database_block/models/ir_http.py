# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

from odoo import SUPERUSER_ID, models
# from odoo.http import request

import logging
_logger = logging.getLogger(__name__)


class IrHttp(models.AbstractModel):

    _inherit = "ir.http"

    def session_info(self):
        res = super(IrHttp, self).session_info()

        # warn_enterprise = False

        # res = super(IrHttp, self).session_info()

        _logger.info('estoy aca')

        res['database_block_message'] = "Changeme"
        res['database_block_display'] = False
        res['database_block_alert_type'] = "success"

        _logger.info('res: ')
        _logger.info(res)

        return res
