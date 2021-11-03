def print_upper_words(word_list, must_start_with):
    # TODO
    for word in word_list:
        if word[0] in must_start_with:
            print(word.upper())

# this should print "HELLO", "HEY", "YO", and "YES"
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"],
                   must_start_with={"h", "y"})