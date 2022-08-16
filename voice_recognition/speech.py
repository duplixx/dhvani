import speech_recognition as sr

r = sr.Recognizer()
with sr.Microphone() as source:
    print("Speak Anything :")
    audio = r.record(source,timeout=100,phrase_time_limit=10)
    print('Done, Please wait while we are processing what you said...')
    try:
        text = r.recognize_google(audio,language='en-IN')
        print("You said : {}".format(text))
    except:
        print("Sorry we could not recognize what you said. You can try again.")

    print("Thank you for using our service.")