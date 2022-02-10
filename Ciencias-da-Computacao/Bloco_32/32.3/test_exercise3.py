import pytest
from exercise3 import verifies_email


def test_verifies_if_valid_email_is_accepted():
    assert verifies_email("aa-a@nomewebsite.ext") == 'Email valido!'
    assert verifies_email("aaaa@nomewebsite.ext") == 'Email valido!'
    assert verifies_email("a1993@nomewebsite.ext") == 'Email valido!'
    assert verifies_email("a_a1a-a@nomewebsite.ext") == 'Email valido!'
    assert verifies_email("a@nomewebsite.ext") == 'Email valido!'
    assert verifies_email("abc@website123.com") == 'Email valido!'
    assert verifies_email("abc@website123.com") == 'Email valido!'


def test_if_email_doesnt_start_with_letter():
    with pytest.raises(ValueError, match="Invalid Character"):
        verifies_email('1@teste.com')


def test_if_email_has_forbidden_chars():
    with pytest.raises(ValueError, match="Invalid Character"):
        verifies_email('alo*a@teste.com')


def test_if_email_has_forbidden_chars_():
    with pytest.raises(ValueError, match="Invalid Character"):
        verifies_email('aloha@te*ste.com')


def test_if_email_has_extension_bigger_than_three():
    with pytest.raises(ValueError, match="Invalid Character"):
        verifies_email('aloha@teste.coma')
