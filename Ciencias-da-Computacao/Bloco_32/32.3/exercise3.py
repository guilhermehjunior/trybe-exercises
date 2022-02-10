import re


def verifies_email(email):
    if re.search('^[a-z](\w|-)*@\w+\.[a-z]{3}$', email):
        return('Email valido!')
    raise ValueError("Invalid Character")
