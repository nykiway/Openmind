require 'test_helper'

class Api::ListsMeditationsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_lists_meditations_create_url
    assert_response :success
  end

  test "should get show" do
    get api_lists_meditations_show_url
    assert_response :success
  end

  test "should get destroy" do
    get api_lists_meditations_destroy_url
    assert_response :success
  end

end
