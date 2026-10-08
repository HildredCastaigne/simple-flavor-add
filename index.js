import { extension_settings, getContext, loadExtensionSettings } from "../../../extensions.js";
import { saveSettingsDebounced } from "../../../../script.js";

const extensionName = "simple-flavor-add";
const extensionFolderPath = `scripts/extensions/third-party/${extensionName}`;

jQuery(async () => {
 console.log(`[dice-roller] Loading…`);

 try {
 const settingsHtml = await $.get(`${extensionFolderPath}/example.html`);
 $("#extensions_settings2").append(settingsHtml);

 console.log(`[dice-roller] ✅ Loaded successfully`);
 } catch (error) {
 console.error(`[dice-roller] ❌ Failed to load:`, error);
 }
});