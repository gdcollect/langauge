import { bootstrap, define, IBootstrap, inject, singleton } from "appolo";
import IEnv from "../config/env/IEnv";
import { ILogger } from "@appolo/logger";

@define()
@singleton()
@bootstrap()
export class Bootstrap implements IBootstrap {

    @inject() env: IEnv;
    @inject() logger: ILogger;

    public async run() {
        try {

            // await sharp(
            //     Buffer.from(`<svg width="200" height="200" viewBox="-40 0 150 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">  <g fill="grey"     transform="rotate(-10 50 100)                translate(-36 45.5)                skewX(40)                scale(1 0.5)">    <path id="heart" d="M 10,30 A 20,20 0,0,1 50,30 A 20,20 0,0,1 90,30 Q 90,60 50,90 Q 10,60 10,30 z" />  </g>   <use xlink:href="#heart" fill="none" stroke="red"/></svg>`)
            // )
            //     .resize(200, 200)
            //     .png()
            //     .toFile("./heart.png");

            this.logger.info("langauge is runing!");

        } catch (e) {

            this.logger.error("bootstrap error", { e });

            process.exit(1);

        }
    }
}