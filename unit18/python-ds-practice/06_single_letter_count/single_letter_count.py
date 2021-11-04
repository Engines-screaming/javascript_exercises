def single_letter_count(word, letter):
    """How many times does letter appear in word (case-insensitively)?
    
        >>> single_letter_count('Hello World', 'h')
        1
        
        >>> single_letter_count('Hello World', 'z')
        0
        
        >>> single_letter_count("Hello World", 'l')
        3
    """
    # make word and letter are both same case (lower case)
    lower_word = word.lower()
    lower_letter = letter.lower()

    counts = 0
    for letter in lower_word:
        if lower_letter == letter:
            counts += 1

    return counts
    