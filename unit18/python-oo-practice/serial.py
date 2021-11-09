"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        self.start_num = start
        self.current_num = start

    def generate(self):
        serial_num = self.current_num
        self.current_num += 1
        return serial_num

    def reset(self):
        self.current_num = self.start_num