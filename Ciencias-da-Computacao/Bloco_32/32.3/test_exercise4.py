from exercise4 import verifies_if_emails_on_list_are_ok


def test_verifies_if_returns_list_with_all_correct_emails():
    lista = ["nome@dominio.com", "outro@dominio.com"]
    expected_result = ["nome@dominio.com", "outro@dominio.com"]
    assert verifies_if_emails_on_list_are_ok(lista) == expected_result


def test_verifies_if_returns_empty_list_with_invalid_emails():
    lista = ["no&me@dominio.com", "outro@dominio.coma"]
    expected_result = []
    assert verifies_if_emails_on_list_are_ok(lista) == expected_result


def test_verifies_if_prints_correct_list_with_correct_and_incorrect_emails():
    lista = ["nome@dominio.com", "out*ro@dominio.com"]
    expected_result = ["nome@dominio.com"]
    assert verifies_if_emails_on_list_are_ok(lista) == expected_result
