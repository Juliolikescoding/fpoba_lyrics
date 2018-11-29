Dim message, sapi
message=InputBox(“What should I speak?”,”Speak to me”)
Set sapi=CreateObject(“sapi.spvoice”)
sapi.Speak message