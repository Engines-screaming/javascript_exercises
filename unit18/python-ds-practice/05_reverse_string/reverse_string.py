def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """

    # reversed = ''
    # for x in range(-1, -(len(phrase)) - 1, -1):
    #     reversed += phrase[x]
    # return reversed

    # better solution:
    return phrase[::-1]