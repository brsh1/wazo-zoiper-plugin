# Zoiper Plugin for Wazo

This project integrates the Zoiper OEM QR code generation into a Wazo plugin. The plugin dynamically generates a QR code for Zoiper configuration based on a provider ID specified in the configuration file.

## Goal of the Project

The goal is to provide a simple way to integrate Zoiper OEM QR code generation into Wazo. By providing a `provider_id` in the configuration, users can generate preconfigured QR codes for their clients.

## Preparation Before Installation

1. Open the `config.json` file in the project directory.
2. Update the `provider_id` field with your Zoiper OEM provider ID:

   ```json
   {
     "provider_id": "<YOUR_PROVIDER_ID_HERE>"
   }
   ```

   Replace `<YOUR_PROVIDER_ID_HERE>` with your actual provider ID.

3. Ensure the `config.json` file is saved and in the same directory as the other plugin files.

## Installation

Follow Wazo's plugin installation documentation to install the plugin into your Wazo system.

## Notes

- **Do not commit your actual provider ID to any public repository.**
- Ensure the configuration is verified before deploying the plugin to production.

## Contribution

Feel free to contribute by submitting issues or pull requests for improvements.

