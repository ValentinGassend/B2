import pexpect

bash = pexpect.spawn(
    './stream -m models/ggml-model-whisper-base.bin --step 10000 --length 25000 -t 4 --language fr -ac 512 -l fr -f ../../text_live.txt', echo=True, cwd="/home/valentin/Desktop/MemoRoom/modules/Whisper_and_NLU/whisper_and_controller/whisper.cpp")
print(bash.readline())
