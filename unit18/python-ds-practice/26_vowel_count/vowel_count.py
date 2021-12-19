def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """

    no_spaces = phrase.replace(' ', '')
    parsed_phrase = no_spaces.lower()

    vowels = ['a', 'e', 'i', 'o', 'u']
    counts = {}
    
    for letter in parsed_phrase:
        if letter in vowels:
            if letter in counts:
                counts[letter] += 1
            else: 
                counts[letter] = 1
    
    return counts
