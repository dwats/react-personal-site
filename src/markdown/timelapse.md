# Timelapse Video Capture

The video displayed in this app is captured using a [Raspberry Pi 3B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) and the [Camera Module V2](https://www.raspberrypi.org/products/camera-module-v2/).
The video itself is comprised of individual frames captured using [pi-camera](https://www.npmjs.com/package/pi-camera) and processed into an `mp4` file using [node-fluent-ffmpeg](https://github.com/fluent-ffmpeg/node-fluent-ffmpeg).
Once the video is created it `put` into an S3 Bucket.

## Tech Stack
* Raspberry Pi 3b
* Raspberry Pi Camera Module V2
* AWS S3
* NodeJS 8.10

## Github Repos

[node-rpi3-timelapse](https://github.com/dwats/node-rpi3-timelapse)
