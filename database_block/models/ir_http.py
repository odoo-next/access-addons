# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

from odoo import SUPERUSER_ID, models
from odoo.http import request

import logging
_logger = logging.getLogger(__name__)


class IrHttp(models.AbstractModel):

    _inherit = "ir.http"

    def session_info(self):
        res = super(IrHttp, self).session_info()

        res['database_block_show_message_in_apps_menu'] = bool(self.env['ir.module.module'])

        _logger.info('res:.................. ')
        _logger.info(res)

        return res

        # ICP = request.env['ir.config_parameter'].sudo()
        # User = request.env['res.users']

        # if User.has_group('base.group_system'):
        #     warn_enterprise = 'admin'
        # elif User.has_group('base.group_user'):
        #     warn_enterprise = 'user'
        # else:
        # warn_enterprise = False

        # res = super(IrHttp, self).session_info()

        # _logger.info('estoy aca')

        # res["database_block_show_message_in_apps_menu"] = bool(
        #     self.env["ir.module.module"]
        #     .with_user(SUPERUSER_ID)
        #     .search(
        #         [("name", "=", "web_enterprise"), ("state", "=", "installed")],
        #         limit=1,
        #     )
        # )

        # _logger.info('res: ')
        # _logger.info(res)

        # return res
