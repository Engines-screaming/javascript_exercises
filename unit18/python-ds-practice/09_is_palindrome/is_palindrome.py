def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """

    p = phrase.lower().replace(' ', '')
    n = len(phrase) // 2  # figure out how many times to iterate

    for x in range(n):
        if p[x] != p[len(p) - 1 - x]:
            return False
    
    return True