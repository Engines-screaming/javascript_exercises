def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    all_list = True
    for item in lst:
        if isinstance(item, list) == False:
            all_list = False

    return all_list