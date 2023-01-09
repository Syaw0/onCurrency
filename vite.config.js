import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import {VitePluginNode} from "vite"

export default defineConfig({
    plugins:[react()],
    ssr:{
        target:"node"
    },
    build:{
        outDir:"./public"
    },
    resolve:{
        alias:{
            "@": path.resolve(__dirname , './src')
        }
    }
})

