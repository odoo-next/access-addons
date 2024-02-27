
from odoo import models
from odoo.http import request


class Http(models.AbstractModel):
    _inherit = 'ir.http'

    def session_info(self):
        ICP = request.env['ir.config_parameter'].sudo()
        User = request.env['res.users']

        if User.has_group('base.group_system'):
            warn_enterprise = 'admin'
        elif User.has_group('base.group_user'):
            warn_enterprise = 'user'
        else:
            warn_enterprise = False

        result = super(Http, self).session_info()
        result['support_url'] = "https://www.odoonext.com/help"
        if warn_enterprise:
            result['warning'] = warn_enterprise
            result['expiration_date'] = '2430-10-10'
            result['expiration_reason'] = ICP.get_param('database.expiration_reason')
        return result
