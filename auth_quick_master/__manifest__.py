# Copyright 2018 Ivan Yelizariev <https://it-projects.info/team/yelizariev>
# License AGPL-3.0 or later (https://www.gnu.org/licenses/agpl.html).
{
    "name": """Quick Auth (Master)""",
    "summary": """Authentication provider for "Quick Authentication" module""",
    "category": "Extra Tools",
    "images": ['images/quick_auth_mater.jpg'],
    "version": "1.1.0",
    "application": False,
    "author": "IT-Projects LLC, Ivan Yelizariev",
    "support": "apps@it-projects.info",
    "website": "https://it-projects.info/team/yelizariev",
    "license": "AGPL-3",

    "depends": [
    ],
    "external_dependencies": {"python": [], "bin": []},
    "data": [
        "security/res_groups_data.xml",
        "security/ir_rule_data.xml",
        "security/ir.model.access.csv",
    ],
    "demo": [
    ],
    "qweb": [
    ],

    "post_load": None,
    "pre_init_hook": None,
    "post_init_hook": None,
    "uninstall_hook": None,

    "auto_install": False,
    "installable": True,
}
