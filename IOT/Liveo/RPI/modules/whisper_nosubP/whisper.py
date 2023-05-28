import subprocess
# subprocess.run([ "cd ","./home/valentin/Desktop/MemoRoom/modules/whisper/whisper.cpp","./stream -m models/ggml-model-whisper-base.bin --step 10000 --length 15360 -c 0 -t 3 -ac 512 -l fr -kc -f ../text_live.txt"])
subprocess.run("./stream -m models/ggml-model-whisper-base.bin --step 10000 --length 15360 -c 0 -t 3 -ac 512 -l fr -kc -f ../text_live.txt", shell=True)