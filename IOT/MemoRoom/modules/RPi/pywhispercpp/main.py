from myassistant import MyAssistant


my_assistant = MyAssistant(model='base', commands_callback=print,
                           n_threads=8, input_device=61, q_threshold=6, silence_threshold=24)
# print(MyAssistant.available_devices())
my_assistant.start()
