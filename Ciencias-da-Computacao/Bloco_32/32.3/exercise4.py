from exercise3 import verifies_email


emails = ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"]


def verifies_if_emails_on_list_are_ok(lista):
    valid_emails = []
    for email in lista:
        try:
            verifies_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)
    return valid_emails


print(verifies_if_emails_on_list_are_ok(emails))
