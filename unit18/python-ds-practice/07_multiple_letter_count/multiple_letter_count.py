def multiple_letter_count(phrase):
    """Return dict of {ltr: frequency} from phrase.

        >>> multiple_letter_count('yay')
        {'y': 2, 'a': 1}

        >>> multiple_letter_count('Yay')
        {'Y': 1, 'a': 1, 'y': 1}
    """
    counts = {}

    for key_letter in phrase:

        if key_letter not in counts.keys():
            counts[key_letter] = 0  # initialize key letter if it doesnt exist

        for letter in phrase:
            if key_letter == letter:
                counts[key_letter] += 1

    return counts