/** @odoo-module **/

// import {AppsMenu} from "@web_responsive/components/apps_menu/apps_menu.esm";

// export class DatabaseBlockMessage extends AppsMenu {
//     setup() {
//         console.log(odoo.session_info);
//         super.setup();
        
//         if (odoo.session_info.database_block_message) {
//             $(".database_block_message").html(
//                 odoo.session_info.database_block_message
//                 );
                
//                 if (!odoo.session_info.database_block_is_warning) {
//                     $(".o_action_manager").block({
//                         message: $(".block_ui.database_block_message").html(
//                             odoo.session_info.database_block_message
//                             ),
//                         });
//                         $("header").css("z-index", $.blockUI.defaults.baseZ + 20);
//                     }
                    
//                     if (odoo.session_info.database_block_show_message_in_apps_menu) {
//                         $(".dropdown-menu > .database_block_message").show();
//                     }
//                 }
//             }
//         }