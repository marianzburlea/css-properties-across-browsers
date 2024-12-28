import sys
import time

def single_line_scroller_smooth(text: str, delay: float = 0.1):
    """Smoothly scroll a single line of text character by character.

    Args:
        text (str): The text to scroll.
        delay (float): Delay between scroll steps in seconds.
    """
    text = text + " "  # Add a space at the end for seamless looping
    while True:
        for i in range(1, len(text) + 1):
            # Dynamically show text character by character
            sys.stdout.write("\r" + text[:i])
            sys.stdout.flush()
            time.sleep(delay)
        for i in range(1, len(text)):
            # Remove characters one by one for seamless transition
            sys.stdout.write("\r" + text[i:])
            sys.stdout.flush()
            time.sleep(delay)

if __name__ == "__main__":
    message = "Smooth scrolling demo in CLI!"
    message = "visit wowjob.dev or wowjob.ai or wowjob.blog"
    single_line_scroller_smooth(message, delay=0.1)
