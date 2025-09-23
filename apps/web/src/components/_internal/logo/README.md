# icons / favicons

1. Generate your icons and HTML code:
    ```
    cd <your project>
    npx realfavicon generate <your master image> favicon-settings.json output-data.json path/to/output/favicon/files
    ```

    Replace <your master image> with the path to your master image, probably the one you submitted to RealFaviconGenerator.


2. Inject the generated favicon markups into your HTML files:
    ```
    npx realfavicon inject output-data.json path/to/output/html <your HTML files...>
    ```

    Replace <your HTML files...> with the path to your HTML files.



3. Make sure your favicon is properly setup by starting your app and running the checker:

    ```
    npx realfavicon check <port>
    ```
    Replace <port> with the port your app is listening to.


fonte logo `Shadows Into Light Two`
