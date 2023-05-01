import pexpect
import sys
   # address of your self.DEVICE



class Ble:
  def __init__(self,address="0C:B8:15:F8:6E:02"):
    self.DEVICE = address
    if len(sys.argv) == 2:
      self.DEVICE = str(sys.argv[1])
    # Run gatttool interactively.
    self.child = pexpect.spawn("gatttool -I")

    # Connect to the self.DEVICE.

  def lunch(self):
    print("Connecting to:"),
    print(self.DEVICE)
    NOF_REMAINING_RETRY = 3
    try:
      self.child.sendline("scan")
      self.child.sendline("connect {0}".format(self.DEVICE))
      self.child.expect("Connection successful", timeout=5)
    except pexpect.TIMEOUT:
      NOF_REMAINING_RETRY = NOF_REMAINING_RETRY-1
      if (NOF_REMAINING_RETRY>0):
        print("timeout, retry...")
      else:
        print("timeout, giving up.")
    else:
      print("Connected!")