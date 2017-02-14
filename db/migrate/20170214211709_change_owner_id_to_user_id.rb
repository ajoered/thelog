class ChangeOwnerIdToUserId < ActiveRecord::Migration[5.0]
  def change
    rename_column :spots, :owner_id, :user_id
  end
end
