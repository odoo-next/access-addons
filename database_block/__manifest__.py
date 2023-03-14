# Copyright 2020 Eugene Molotov <https://it-projects.info/team/em230418>
# License MIT (https://opensource.org/licenses/MIT).

{
    "name": """Block backend UI""",
    "summary": """This technical module allows blocking backend access and display the message""",
    "category": "Extra Tools",
    "images": [],
    "version": "15.0.1.0.0",
    "author": "IT-Projects LLC, Eugene Molotov",
    "support": "help@itpp.dev",
    "website": "https://twitter.com/OdooFree",
    "license": "Other OSI approved licence",  # MIT
    "depends": ["web_enterprise"],
    "external_dependencies": {"python": [], "bin": []},
    "data": [],
    "demo": [],
    "qweb": ["src/xml/expiration_panel.xml"],
    "assets": {
        "web.assets_backend": [
            "database_block/static/src/js/enterprise_service.js",
            "database_block/static/src/js/expiration_panel.js",
        ],
        'web.assets_qweb': [
            "database_block/static/src/xml/expiration_panel.xml",
        ]
    },
    "post_load": None,
    "pre_init_hook": None,
    "post_init_hook": None,
    "uninstall_hook": None,
    "auto_install": False,
    "installable": True,
    'application': True,
}
