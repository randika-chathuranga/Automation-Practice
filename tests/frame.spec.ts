import {test, expect} from "@playwright/test"

test("frames", async({page})=>{

    //total frames
    const allFrames = await page.frames();
    console.log("number of frames", allFrames.length);

    //access frame
    const frame = await page.frame('frame-login');
    //or
    const frameSecond = page.frame({ url: 'dhgsdgshg' });
    frameSecond?.fill("[name='myname']", "hello");

})